♻️ Sistema de Classificação de Resíduos
♻️ Waste Classification System
📌 Sobre o Projeto | About the Project

PT-BR:
Este projeto foi desenvolvido na disciplina de Robótica e Sistemas Inteligentes com o objetivo de classificar imagens de resíduos utilizando Inteligência Artificial. A proposta é aplicar visão computacional para auxiliar na identificação e separação de materiais recicláveis.

EN:
This project was developed for the Robotics and Intelligent Systems course, aiming to classify waste images using Artificial Intelligence. The goal is to apply computer vision to help identify and sort recyclable materials.

🚀 Tecnologias Utilizadas | Technologies Used
JavaScript
TensorFlow.js
Teachable Machine
Kaggle (dataset de imagens / image dataset)
HTML / CSS
🧠 Como Funciona | How It Works

PT-BR:

O modelo é treinado no Teachable Machine com imagens de diferentes tipos de resíduos.
O modelo é exportado para o TensorFlow.js.
A aplicação web carrega o modelo no navegador.
O usuário pode enviar uma imagem (ou usar câmera, se disponível).
O sistema retorna a classificação do resíduo.

EN:

The model is trained using Teachable Machine with images of different waste categories.
The model is exported to TensorFlow.js.
The web application loads the model in the browser.
The user uploads an image (or uses a camera, if available).
The system returns the predicted waste classification.
📂 Estrutura do Projeto | Project Structure
SISTEMA-DE-CLASSIFICACAO/
│── model/
│   ├── model.json
│   ├── metadata.json
│   └── weights.bin
│
│── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── README.md
▶️ Como Executar | How to Run

PT-BR:

Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse a pasta:
cd SISTEMA-DE-CLASSIFICACAO
Abra o arquivo index.html no navegador
(ou utilize Live Server no VS Code)

EN:

Clone the repository:
git clone https://github.com/your-username/your-repository.git
Navigate to the folder:
cd SISTEMA-DE-CLASSIFICACAO
Open the index.html file in your browser
(or use Live Server in VS Code)
📊 Dataset

PT-BR:
O dataset foi obtido através do Kaggle, contendo imagens de diferentes tipos de resíduos:

Plástico
Papel
Metal
Vidro
Orgânico

EN:
The dataset was obtained from Kaggle, containing images of different types of waste:

Plastic
Paper
Metal
Glass
Organic
📸 Melhorias Futuras | Future Improvements
Integração com câmera em tempo real | Real-time camera integration
Aumento do dataset | Larger dataset
Deploy online | Online deployment
Interface mais interativa | More interactive interface
Mais categorias de classificação | More classification categories
🎯 Objetivo Acadêmico | Academic Purpose

PT-BR:
Aplicar conceitos de Inteligência Artificial, Machine Learning, Visão Computacional e Desenvolvimento Web.

EN:
Apply concepts of Artificial Intelligence, Machine Learning, Computer Vision, and Web Development.

👨‍💻 Autores | Authors

Alisson da Silva Ribeiro
Emily Mangas de Oliveira
Fernanda Pinheiro
Pedro Henrique Santos Viana

📄 Licença | License

PT-BR:
Projeto de uso acadêmico e livre para estudos.

EN:
This project is for academic purposes and free for study.
