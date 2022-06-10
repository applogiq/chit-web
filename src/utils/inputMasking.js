const inputMask = (type, e, editValue) => {
  if (type === "mobile") {
    if (e) {
      const { value } = e.target;
      let temp = value;
      const x = temp.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      return (temp = !x[2]
        ? x[1]
        : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ""}`);
    }
    if (editValue) {
      let temp = editValue;
      const x = temp.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      return (temp = !x[2]
        ? x[1]
        : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ""}`);
    }
  }

  if (type === "zipCode") {
    if (e) {
      const { value } = e.target;
      let temp = value;
      const x = temp.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})/);
      return (temp = !x[2] ? x[1] : `${x[1]}${x[2]}`);
    }
    if (editValue) {
      let temp = editValue;
      const x = temp.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})/);
      return (temp = !x[2] ? x[1] : `${x[1]}${x[2]}`);
    }
  }

  if (type === "ssn") {
    if (e) {
      const { value } = e.target;
      let temp = value;
      const x = temp.replace(/\W/g, "").match(/(\w{0,3})(\w{0,2})(\w{0,4})/);
      console.log("SSN Regex test --->", x);
      return (temp = !x[2] ? x[1] : `${x[1]}-${x[2]}${x[3] ? `-${x[3]}` : ""}`);
    }
    if (editValue) {
      let temp = editValue;
      const x = temp.replace(/\W/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      return (temp = !x[2]
        ? x[1]
        : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ""}`);
    }
  }

  if (type === "alphaNumerical") {
    if (e) {
      const { value } = e.target;
      const temp = value;
      const x = temp.replace(/[^a-zA-Z0-9 ]/g, "");
      return x;
    }
  }

  if (type === "onlyAlphabets") {
    if (e) {
      const { value } = e.target;
      const temp = value;
      const x = temp.replace(/[^a-zA-Z]/g, "");
      return x;
    }
  }

  if (type === "onlyNumbers") {
    if (e) {
      const { value } = e.target;
      const temp = value;
      const x = temp.replace(/[^\d.-]/g, "");
      return x;
    }
    if (editValue) {
      const temp = editValue;
      const x = temp.replace(/[^\d.-]/g, "");
      return x;
    }
  }

  if (type === "taxIdentificationNumber") {
    if (e) {
      const { value } = e.target;
      let temp = value;
      const x = temp.replace(/\D/g, "").match(/(\d{0,5})(\d{0,4})/);
      return (temp = !x[2] ? x[1] : `${x[1]}${x[2]}`);
    }
    if (editValue) {
      let temp = editValue;
      const x = temp.replace(/\D/g, "").match(/(\d{0,5})(\d{0,4})/);
      return (temp = !x[2] ? x[1] : `${x[1]}${x[2]}`);
    }
  }
};

export default inputMask;
