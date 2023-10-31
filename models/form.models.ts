export class FormField<T> {
    key: string;
    type: string;
    title: string;
    widget: string;
    empty_data: string;
    full_name: string;
    required: boolean;
    disabled: boolean;
    property_order: number;
    remote_path: string;
    req_params: object;
    choices: any[];
    options: any[];
    attr: any;
    data: any;
    // attr: object = { class: string; style: string; suffix:string; help:string };
  
    constructor(
      options: {
        key?: string;
        type?: string;
        title?: string;
        widget?: string;
        empty_data?: string;
        full_name?: string;
        required?: boolean;
        disabled?: boolean;
        property_order?: number;
        req_params?: any;
        choices?: any[];
        options?: any[];
        attr?: object;
        data?: any;
        // attr?: FormAttrField
      } = {}
    ) {
      this.key = options.key || "";
      this.type = options.type || "";
      this.title = options.title || "";
      this.widget = options.widget || "";
      this.empty_data = options.empty_data || "";
      this.full_name = options.full_name || "";
      this.required = !!options.required;
      this.disabled = !!options.disabled;
      this.property_order = options.property_order === undefined ? 1 : options.property_order;
      this.req_params = options.req_params;
      this.choices = options.choices || [];
      this.options = options.options || [];
      this.attr = options.attr || {};
      this.data = options.data || null;
    }
  }