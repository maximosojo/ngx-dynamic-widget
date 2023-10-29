export class FormAttrField<T> {
    class: string;
    style: string;
    suffix: string;
    help: string;
  
    constructor(
      options: {
        class?: string;
        style?: string;
        suffix?: string;
        help?: string;
      } = {}
    ) {
      this.class = options.class || "";
      this.style = options.style || "";
      this.suffix = options.suffix || "";
      this.help = options.help || "";
    }
  }