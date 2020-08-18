import Component from '@glimmer/component';

export default class TestErrorsComponent extends Component {
  get errors() {
    const { model, field } = this.args;
    return model.errors.errorsFor(field).map(error => error.message);
  }
}
