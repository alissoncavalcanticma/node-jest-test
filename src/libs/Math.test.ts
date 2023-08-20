import { Math } from './Math';

//Grupo de teste
describe('Testing Math Library', () => {

    //Declare scope variables
    let num1: number;
    let num2: number;

    //beforeEach(()=>{})
    beforeAll(() => {
        num1 = 4;
        num2 = 2;

        console.log(num1 + " - " + num2);
    })
    afterAll(() => {
        num1 = 0;
        num2 = 0;

        console.log(num1 + " - " + num2);
    })

    it('should sum two numbers correctly', () => {
        //console.log(num1 + " - " + num2);
        const response = Math.sum(num1,num2);
        expect(response).toBe(6);
    });
    
    it('should subtract two numbers correctly', () => {
        const response = Math.sub(2,1);
        expect(response).toBe(1);
    });
    
    it('should divide two numbers correctly', () => {
        const response1 = Math.div(4,2);
        expect(response1).toBe(2);
    
        const response2 = Math.div(2,0);
        expect(response2).toBe(Infinity);
    });
    
    it('should multiply two numbers correctly', () => {
        const response1 = Math.mut(2,1);
        expect(response1).toBe(2);
    
        const response2 = Math.mut(0,2);
        expect(response2).toBe(0);

    });

    it('Count chars', () => {
        const response = 'Denied';
        expect(response).toHaveLength(6);
    });

    it('Check property object', () => {
        const obj = {
            "name": "Alisson",
            "idade": 33
        }
        expect(obj).toHaveProperty('idade');
    });

    it('check with regex', () => {
        const email = 'als1@email.com';

        expect(email).toMatch(/[a-z][0-9]@[a-z].[a-z]/);
    });

})

