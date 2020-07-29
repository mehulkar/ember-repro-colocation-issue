import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import MyExtended from 'colocation-test/components/my-extended';

module("Integration | Component | my-extended", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    let called = false;
    const { owner } = this;

    // override registered class so we can assert that a method is calls
    owner.register('component:my-extended', MyExtended.extend({
      didInsertElement() {
        called = true;
      },
    }));

    await render(hbs`<MyExtended />`);
    assert.ok(document.querySelector("[data-test-hi]"), "template rendered");
    assert.equal(called, true, "did insert called");
  });
});
