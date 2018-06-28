import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("first test", () => {
    it("it should pass", () => {
        expect(true).to.equals(true);
    });
});

describe('index.html', () => {
    it('Should say Hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equals('Hello Ruthvik!!');
            done();
            window.close();
        });
    });
});