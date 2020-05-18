// Approach 1

function generateid() {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(generateid());

// Approach 2
function idGenerator() {
  var ans = "";
  arr = "0123456789";
  for (var i = 16; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}

console.log(idGenerator());
