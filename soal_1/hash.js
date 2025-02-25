async function hashString(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

const date = new Date();

const todayDate = formatDate(date);
const firstName = "ken";
const sex = "pria";
const jobdesk = "ifabula";
const inputString = `${todayDate}${firstName}${sex}${jobdesk}`;

console.log(inputString);

hashString(inputString).then((hash) => {
  console.log("Hasil Hashing SHA-256:", hash);
});

function formatDate(date) {
  return date.toISOString().split("T")[0];
}
