exports.handler = async (event) => {
    const { name, email, phone } = event.queryStringParameters;
  
    // Your actual CRM API
    const crmApiUrl = `/.netlify/functions/createlead?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(number)}`;
    try {
      const response = await fetch(crmApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });
  
      if (!response.ok) {
        throw new Error("CRM responded with error");
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Lead sent to CRM!" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };
  