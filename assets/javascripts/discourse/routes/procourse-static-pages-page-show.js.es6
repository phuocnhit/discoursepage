import Page from '../models/page-show';
import DiscourseURL from 'discourse/lib/url';
import DiscourseRoute from "discourse/routes/discourse";


export default DiscourseRoute.extend({
  model(opts) {
    return Page.findById(opts);
  },

  titleToken() {
    const model = this.modelFor('procourse-static-pages.page.show');
    if (model && model.title) {
      return model.title;
    }
  },

  setupController(controller, model) {
    controller.setProperties({ model });
  },

  afterModel: function(result) {
    
    // var result           = '';
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // var charactersLength = characters.length;
    // for ( var i = 0; i < 8; i++ ) {
    //    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // }
    // Math.floor(Math.random() * 100000000)
    var t = JSON.stringify(result);


    var newURL = `/page/${result.slug}/${result.id}/a/?a=${window.location.href}`;
    DiscourseURL.routeTo(newURL, { replaceURL: true });
  }
});
