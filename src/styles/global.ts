import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root { //Define as variaves globais
        --background: #f0f2f5;
        --text-body: #969CB3;
        --text-title: #363F5F;
        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   
    //Por padrao o tamanho de fonte vem 16px(ideal para desktop)
    //Configuramos nossa pagina para diminuir o pixel dependendo do tamanho do dispositivo
    //Porque usar % ao inves de definir o px direto, pois o % vai se adaptar as configuracoes de fontes definidas pelo usuario em seu dispositivo
    html {
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5% // 14px
        }
    }
    // usaremos o rem pois ele ira se adpatar da melhor forma dependendo da tela do usuario
    // REM = 1rem = font-size da pagina

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // hack para fazer as fontes ficarem mais detalhadas em quem usa a chrome engine
    }
    // input, textarea e button por padrao nao importa a fonte do body - por isso tem que definir
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }


    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0 ,0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        height: 588px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover{
            filter: brightness(0.7);
        }
    }
`;