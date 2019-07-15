export class Property{


    constructor(
        public id: number,
        public name: string,
        public price: string,
        public location: string,
        public imageUrl: string = 'https://placekitten.com/100/100'
    ){}
}