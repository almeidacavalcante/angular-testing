import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(() => {
    this.component = new VoteComponent();
  })

  it('Deve incrementar os votos quando votado', () => {
    this.component.upVote();

    expect(this.component.totalVotes).toEqual(1);
  });

  it('Deve decrementar os votos quando down voted', () => {  
    this.component.downVote();

    expect(this.component.totalVotes).toEqual(-1);
  });
});