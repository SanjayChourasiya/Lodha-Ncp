const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { name, email, phone } = event.queryStringParameters;

    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: "Missing name, email, or phone" }),
      };
    }

    // ✅ Updated CRM API endpoint
    const crmApiUrl = `https://valueproperties.tranquilcrmone.in/v1/createlead?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;

    const crmResponse = await fetch(crmApiUrl, {
      method: "GET",
    });

    if (!crmResponse.ok) {
      throw new Error("CRM responded with an error");
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: "Lead sent to CRM successfully!" }),
    };
  } catch (error) {
    console.error("CRM Error:", error.message);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
