import { Fibby } from './../src/fibby.js';
import { exportAllDeclaration } from '@babel/types';

describe("make fibList", () => {
  var fibList = new Fibby();
  fibList.ending = 34;

  test("should return an array of Fibonacci numbers", () => { 
    fibList.makeFib();
    expect(fibList.fullFib.toString()).toEqual('0,1,1,2,3,5,8,13,21,34');
  });                            
});        
describe("make even fibList", () => {
  var fibList = new Fibby();
  fibList.ending = 34;

  test("should return an array of even Fibonacci numbers", () => {
    fibList.makeEvenFib();  
    expect(fibList.evenFib.toString()).toEqual('0,2,8,34');
  });
});
