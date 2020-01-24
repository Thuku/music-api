class Util {
  constructor() {
    this.status = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setResponse(status, message, data, type) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.type = type;
  }

  send(response) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data
    };
    if (this.type === "success") {
      return response.status(this.status).json(result);
    }
    return response.status(this.status).json({
      status: this.type,
      message: this.message
    });
  }
}

export default Util;
