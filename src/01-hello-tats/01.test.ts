import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', ()=>{
    let a = 1;
    let b = 2;
    let c = 3;
    const result1 = sum(a,b);
    const result2 = sum(b,c);
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})
test('multiply should be correct', ()=>{
    let a = 1;
    let b = 2;
    let c = 3;
    const result1 = mult(a,b);
    const result2 = mult(b,c);
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})
test ('split should be correct', ()=>{
    let a = 'hello my friends';
    let b = 'go in home today';

    const result = splitIntoWords(a);
    const result2 = splitIntoWords(b);

    expect(result.length).toBe(3);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('my');
    expect(result[2]).toBe('friends');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('go');
    expect(result2[1]).toBe('in');
    expect(result2[2]).toBe('home');
    expect(result2[3]).toBe('today');
})



