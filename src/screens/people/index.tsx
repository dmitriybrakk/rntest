import React from 'react';
import { connect } from 'react-redux';
import api from '../../../api';
import List from '../../layouts/list';
import Card from '../../components/card';
import { UPDATE_PEOPLE } from '../../constants/actions/people';

interface Props {
    updatePeople: (data: People.Person[]) => void;
    carAmounts: { [brand: string]: number };
}
interface State {
    loading: boolean;
}

class Screen extends React.Component<Props, State> {
    state = {
        loading: true,
    };

    componentDidMount(): void {
        this.handleLoadPeople();
    }

    handleLoadPeople = async () => {
        this.setState({ loading: true }, () => {
            const { updatePeople } = this.props;

            api.loadData()
                .then((data: People.Person[]) => updatePeople(data))
                .finally(() => {
                    this.setState({ loading: false });
                });
        });
    };

    render() {
        const { loading } = this.state;
        const { carAmounts } = this.props;

        return (
            <List loading={loading} onRefresh={this.handleLoadPeople}>
                {Object.keys(carAmounts).map((car: string) => (
                    <Card key={car} title={`Brand: ${car}`} subtitle={`Amount: ${carAmounts[car]}`} />
                ))}
            </List>
        );
    }
}

const mapStateToProps = state => ({
    carAmounts: state.people.reduce(
        (result: { [brand: string]: number }, person: People.Person) => ({
            ...result,
            [person.car.name]: result[person.car.name] ? result[person.car.name] + 1 : 1,
        }),
        {},
    ),
});
const mapDispatchToProps = dispatch => ({
    updatePeople: (people: People.Person[]) => dispatch({ type: UPDATE_PEOPLE, payload: people }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
