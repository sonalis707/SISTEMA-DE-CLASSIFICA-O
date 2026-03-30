// URL do modelo
// Como os arquivos estão na pasta tm-my-image-model localmente, 
// a URL base será ./tm-my-image-model/
const URL = "./tm-my-image-model/";

let model, labelContainer, maxPredictions;

// Elementos da interface
const imageUpload = document.getElementById('image-upload');
const uploadSection = document.getElementById('upload-section');
const previewSection = document.getElementById('preview-section');
const imagePreview = document.getElementById('image-preview');
const classifyBtn = document.getElementById('classify-btn');
const resetBtn = document.getElementById('reset-btn');
const loadingDiv = document.getElementById('loading');
const resultsDiv = document.getElementById('results');
const labelContainerDiv = document.getElementById('label-container');

// Inicializa o processo
async function init() {
    try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // Carrega o modelo de visão criado no Teachable Machine
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
    } catch (error) {
        console.error("Erro ao carregar o modelo:", error);
        alert("Erro ao carregar o modelo de Inteligência Artificial. Certifique-se de estar rodando isso em um servidor local (ex: via Live Server).");
    }
}

// Manipula o upload da imagem
imageUpload.addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            uploadSection.classList.add('hidden');
            previewSection.classList.remove('hidden');
            resultsDiv.classList.add('hidden');
            labelContainerDiv.innerHTML = ''; // Limpa resultados anteriores
        }
        
        reader.readAsDataURL(e.target.files[0]);
    }
});

// Manipula drag and drop da imagem
uploadSection.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadSection.classList.add('dragover');
    uploadSection.style.borderColor = 'var(--primary-color)';
});

uploadSection.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadSection.classList.remove('dragover');
    uploadSection.style.borderColor = 'var(--glass-border)';
});

uploadSection.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadSection.classList.remove('dragover');
    uploadSection.style.borderColor = 'var(--glass-border)';
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        imageUpload.files = e.dataTransfer.files;
        // Dispara o evento change manualmente
        const event = new Event('change');
        imageUpload.dispatchEvent(event);
    }
});

// Ação de classificar ao clicar no botão
classifyBtn.addEventListener('click', async () => {
    if (!model) {
        // Se o modelo ainda não tiver sido carregado, tenta carregar novamente
        classifyBtn.disabled = true;
        classifyBtn.innerText = "Carregando modelo...";
        await init();
        classifyBtn.disabled = false;
        classifyBtn.innerText = "Classificar Imagem";
    }

    if (model) {
        classifyBtn.classList.add('hidden');
        resetBtn.classList.add('hidden');
        loadingDiv.classList.remove('hidden');
        
        setTimeout(async () => {
            await predict();
            loadingDiv.classList.add('hidden');
            resultsDiv.classList.remove('hidden');
            classifyBtn.innerText = "Classificar Novamente";
            classifyBtn.classList.remove('hidden');
            resetBtn.classList.remove('hidden');
        }, 500); // pequeno retardo para exibir animação
    }
});

// Reset para enviar nova imagem
resetBtn.addEventListener('click', () => {
    imageUpload.value = '';
    imagePreview.src = '';
    previewSection.classList.add('hidden');
    resultsDiv.classList.add('hidden');
    uploadSection.classList.remove('hidden');
});

// Realiza a predição da imagem
async function predict() {
    // a predição recebe um elemento <img>, <video> ou <canvas>
    const prediction = await model.predict(imagePreview);
    
    labelContainerDiv.innerHTML = '';
    
    // Ordena as predições pela maior probabilidade primeiro
    prediction.sort((a, b) => b.probability - a.probability);
    
    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(1);
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const resultHeader = document.createElement('div');
        resultHeader.className = 'result-header';
        
        const labelSpan = document.createElement('span');
        labelSpan.innerText = className;
        
        const probSpan = document.createElement('span');
        probSpan.innerText = probability + '%';
        
        resultHeader.appendChild(labelSpan);
        resultHeader.appendChild(probSpan);
        
        const progressBg = document.createElement('div');
        progressBg.className = 'progress-bg';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        // Pequeno atraso para a animação da barra CSS funcionar após ela ser anexada ao DOM
        setTimeout(() => {
            progressBar.style.width = probability + '%';
        }, 50);
        
        progressBg.appendChild(progressBar);
        
        resultItem.appendChild(resultHeader);
        resultItem.appendChild(progressBg);
        
        labelContainerDiv.appendChild(resultItem);
    }
}

// Inicia o pré-carregamento do modelo assim que a página abre
window.addEventListener('DOMContentLoaded', () => {
    init();
});
