import { VoteComponent } from './vote.component'; 

describe('VoteComponent with EVENT EMMITER', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Testa se o event emmiter enviou o evento', () => {
    component.upVote();
    expect(component.totalVotes).toEqual(1);
  });
  
});