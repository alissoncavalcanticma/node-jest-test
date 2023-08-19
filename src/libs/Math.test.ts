import { Math } from './Math';

//Grupo de teste
describe('Testing Math Library', () => {

    it('should sum two numbers correctly', () => {
        const response = Math.sum(1,2);
        expect(response).toBe(3);
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

})

