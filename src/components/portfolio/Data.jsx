import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import neural_transfer from "../../assets/neural_transfer.png";
import ner_result from "../../assets/ner_result.png";
import mnist from "../../assets/mnist.png";


export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "CLV prediction web app",
        category: "business analytics",
        git_url: 'https://github.com/ui-fankfurt/clv_prediction'
    },

    {
        id: 2,
        image: ner_result,
        title: "Named-entity recognition model",
        category: "NLP",
        git_url: 'https://huggingface.co/ui-chope/distilbert-base-uncased-finetuned-ner'
    },

    {
        id: 3,
        image: Work3,
        title: "Hand Image Generation (GAN)",
        category: "generative AI",    
        git_url: 'https://github.com/ui-fankfurt/GAN_generated_hands'    
    },

    {
        id: 4,
        image: Work4,
        title: "Digit Segmentation",
        category: "computer vision",
        git_url: 'https://github.com/ui-fankfurt/digit_segmentation'         
    },

    {
        id: 5,
        image: Work5,
        title: "BBC News Categorization",
        category: "NLP",
        git_url: 'https://github.com/ui-fankfurt/bbc_categorisation'        
    },
    {
        id: 6,
        image: Work1,
        title: "Stock Prediction Model",
        category: "business analytics",
        git_url: 'https://github.com/ui-fankfurt/Stock_prediction_model'
    },
    {
        id: 7,
        image: mnist,
        title: "Digit Recognition",
        category: "computer vision",
        git_url: 'https://github.com/ui-fankfurt/digit_recognition'
    },
    {
        id: 7,
        image: neural_transfer,
        title: "Neural Transfer",
        category: "generative AI",
        git_url: 'https://github.com/ui-fankfurt/generative_deep_learning_prac/blob/main/neural_transfer.ipynb'
    }
];

export const projectsNav = [
    {
        name:'all',
    },
    {
        name:'computer vision',
    },
    {
        name:'NLP',
    },
    {
        name:'business analytics',
    },
    {
        name: 'generative AI'
    }
]