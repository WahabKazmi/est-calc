interface QuestionType {
    type: 'slider' | 'radio';
    min: number;
    max: number;
    price: number;
    name: string;
    radio: {
        price: number;
        name: string;
    }[]
}