export class UriAction<T> {
    path: string;
    action_type: string;
    icon: string;
  
    constructor(
      options: {
        path?: string;
        action_type?: string;
        icon?: string;
      } = {}
    ) {
      this.path = options.path || "";
      this.action_type = options.action_type || "";
      this.icon = options.icon || "";
    }
  }