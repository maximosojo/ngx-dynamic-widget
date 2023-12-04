export class Heading<T> {
    widget: string;
    tag: string;
    title: string;
  
    constructor(
      options: {
        widget?: string;
        tag?: string;
        title?: string;
      } = {}
    ) {
      this.widget = options.widget || "";
      this.tag = options.tag || "";
      this.title = options.title || "";
    }
  }