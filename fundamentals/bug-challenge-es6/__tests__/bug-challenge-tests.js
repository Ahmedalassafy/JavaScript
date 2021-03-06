import BugChallenge from '../bug-challenge';
import '../jest-helpers';

const challenge = new BugChallenge();

describe('Bug challenge ES6', () => {

  beforeEach(() => {
    console.clear();
  });

  describe('bug1', () => {

    it("should list the names and ages of people", () => {
      challenge.bug1();

      expect(console.logs).toEqual([
        "Alice is 25",
        "Bob is 27",
        "Charlie is 40"
      ]);
    });

  });

  describe('bug2', () => {

    it("should list all items in the array in reverse order", () => {
      challenge.bug2();

      expect(console.logs).toEqual([
        '4',
        '3',
        '2',
        '1'
      ]);
    });

  });

  describe('bug3', () => {

    it("should output the total of the indices (0 + 1 + 2 = 3)", () => {
      challenge.bug3();

      expect(console.logs).toEqual([
        '3'
      ]);
    });

  });

  describe('bug4', () => {

    it("should list all movies and actors, except the top 3", () => {
      challenge.bug4();

      expect(console.logs).toEqual([
        'movie: Pulp Fiction',
        'movie: Fight club',
        'movie: Forrest Gump',
        'movie: Inception',
        'movie: Goodfellas',
        'movie: The Matrix',
        'movie: Interstellar',
        'actor: Al Pacino',
        'actor: Daniel Day-Lewis',
        'actor: Duston Hoffman',
        'actor: Tom Hanks',
        'actor: Anthony Hopkins',
        'actor: Paul Newman',
        'actor: Denzel Washington'
      ]);
    });

  });

  describe('bug5', () => {

    it("should fetch with caching disabled", () => {
      challenge.bug5();

      expect(console.logs).toEqual([
        'fetch: GET http://www.example.com (useCaching=false)'
      ]);
    });

  });

  describe('bug6', () => {

    it("should run main.js", () => {
      challenge.bug6();

      expect(console.logs).toEqual([
        'run: script=main.js'
      ]);
    });

  });

  describe('bug7', () => {

    it("should first run with stopOnError=all and then with stopOnError=null", () => {
      challenge.bug6();

      expect(console.logs).toEqual([
        'run: stopOnError=all',
        'run: stopOnError=null'
      ]);
    });

  });


  describe('bug8', () => {

    it("should lists numbers 1 through 6", () => {
      challenge.bug8();
      jest.runAllTimers();

      expect(console.logs).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5'
      ]);
    });

  });

});