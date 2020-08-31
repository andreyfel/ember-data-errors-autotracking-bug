import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-errors', function(hooks) {
  setupRenderingTest(hooks);

  test('it shows server errors when they appear', async function(assert) {
    this.tag = this.owner.lookup('service:store').createRecord('tag');

    await render(hbs`<TestErrors @model={{this.tag}} @field="name"/>`);

    assert.dom('.error-list__error').doesNotExist();

    this.tag.errors.add('name', 'the-error');
    await settled();

    assert.dom('.error-list__error').hasText('the-error');

    this.tag.errors.remove('name');
    await settled();

    assert.dom('.error-list__error').doesNotExist();
  });
});
