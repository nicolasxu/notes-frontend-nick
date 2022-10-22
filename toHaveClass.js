import { render, screen } from '@testing-library/react';
import TabContainer from '../TabContainer.jsx'

function MockComponent() {
	return (<TabContainer>

	</TabContainer>)
}

describe("<TabContainer />", () => {
	beforeAll(() => {
		console.log('before all')
	})
	test("TabContainer can render with no error", () => {
		const { container } = render(<MockComponent />)
		expect(container.children[0]).toHaveClass('tab-container')
	})
})