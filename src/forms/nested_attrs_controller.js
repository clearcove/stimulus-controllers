// Use like so:
//
//  %h4 Tasks
//  %div(data-controller="forms--nested-attrs")
//    %template(data-target="forms--nested-attrs.template")
//      = f.fields_for :tasks, Task.new, child_index: 'NEW_RECORD' do |task_f|
//        = render "task_fields", f: task_f
//
//    = f.fields_for :tasks do |task_f|
//      = render "task_fields", f: task_f
//
//    %div(data-target="forms--nested-attrs.links")
//      = link_to("Add Task", "#", class: "btn", data: { action: "click->forms--nested-attrs#add" })
//
//  # _task_fields.html.erb
//  %div.nested-attrs-field(data: { new_record: f.object.new_record? })
//    .form-group
//      = f.label :description
//      = f.text_field :description, class: 'form-control'
//      %small= link_to("Remove", "#", data: { action: "click->forms--nested-attrs#remove" })
//
//    = form.hidden_field :_destroy

/* eslint class-methods-use-this: "off" */
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['links', 'template']

  connect() {
    this.wrapperClass = 'nested-attrs-field';
  }

  add(event) {
    event.preventDefault();

    const content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime());
    this.linksTarget.insertAdjacentHTML('beforebegin', content);
  }

  remove(event) {
    event.preventDefault();

    const wrapper = event.target.closest('.nested-attrs-field');
    if (wrapper.dataset.newRecord === 'true') {
      // New records are simply removed from the page
      wrapper.remove();
    } else {
      // Existing records are hidden and flagged for deletion
      wrapper.querySelector("input[name*='_destroy']").value = 1;
      wrapper.style.display = 'none';
    }
  }
}
