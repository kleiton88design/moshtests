import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
	let component: VoteComponent;

	beforeEach(() => {
		component = new VoteComponent();
	})

	it('should increment totalvotes when upvoted', () => {
		component.upVote();

		expect(component.totalVotes).toBe(1)
	});

	it('should decrement totalvotes when downvotes', () => {
		component.downVote();

		expect(component.totalVotes).toBe(-1)
	});
});