/**
 * @param {string} s
 * @return {string}
 */

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 // str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
// const res = palindrome("abdda");
// console.log(res)

var longestPalindrome = function(s) {
  let maxLength = 0
  let res = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i+1; j < s.length + 1; j++) {
      const temp = s.slice(i, j)
      if (temp.length > maxLength) {

        let allMatch = true
        for (let t = 0; t < temp.length/2;t++) {
          if (temp[t] !== temp[temp.length - t - 1]) {
            allMatch = false
            break
          }
        }
        if (allMatch) {
          maxLength = temp.length
          res = temp
        }

        // const reversed = temp.split('').reverse().join('')
        // if (reversed === temp) {
        //   maxLength = temp.length
        //   res = temp
        // }


      }
    }
  }

  return res
};
let input = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"

const res = longestPalindrome(input)
console.log(res) // 'fklkf'

