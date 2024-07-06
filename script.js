/* Define o índice inicial do slide como 1, em seguida chama a função showSlides para exibir o primeiro slide*/
let slideIndex = 1;
showSlides(slideIndex);

/* Cria-se a função plusSlide para usada avançar ou voltar as imagens. Recebe então um número n que será somado ao índice atual da imagem */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Função usada para exibir a imagem atual. Recebe um número n que define qual imagem será mostrada */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Função principal para usada exibir as imagens. Recebe então um número n, que define qual slide será exibido */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); //Obtém em seguida todos os elementos com a classe "mySlides"
    let pontos = document.getElementsByClassName("ponto"); // Obtém todos os elementos com a classe "ponto"

    // Se o índice da imagem atual for maior que o número de imagens, então retorna para a primeira imagem
    if (n > slides.length) {
        slideIndex = 1
    }

    // Se o índice da imagem atual for menor que 1, então volta para a última imagem
    if (n < 1) {
        slideIndex = slides.length
    }

    // Looping para esconder todas as imagens
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Looping para remover a classe "active" de todos os pontos
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }

    // Exibe a imagem atual
    slides[slideIndex - 1].style.display = "block";

    // Adiciona-se a classe "active" ao ponto correspondente na imagem atual
    pontos[slideIndex - 1].className += " active";
}

/*Este JavaScript controla o carrossel, permitindo ao usuário passar por várias imagens. O código se divide em 3 function.

A função "plusSlides(n)"" permite mudar a imagem atual, somando ou subtraindo um número, permitindo assim avançar para a próxima imagem ou voltar para a anterior.

Já a function "currentSlide(n)" define qual imagem será exibida. Ela é usada quando clicamos nos pontos abaixo das imagens para navegar e ir direto para uma imagem específica.

Por fim a function "showSlides(n)", é a função principal que mostra as imagens. Primeiro, ela analisa a ordem do carrossel, se for maior que o número da imagem ou menor que 1, faz com que o carrossel volte ao início ou ao fim. Depois, esconde todas as imagens e remove a classe "active" de todos os pontos de navegação. Ao final, exibe a imagem atual e adiciona a classe "active" ao ponto correspondente.

Quando se clica nas setas "direita" e "esquerda", a função plusSlides é chamada, já os pontos de navegação usa-se a função currentSlide. Esses cliques permitem a interação com o carrossel, navegando assim pelas imagens seja clicando nos botões ou nos pontos de navegação.*/