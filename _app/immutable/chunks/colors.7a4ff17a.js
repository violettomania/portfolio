import{i as u}from"./index.bdda134e.js";import"./index.673cf77c.js";function o(e,r,t){if(typeof e!="number")throw"(min) is not a number.";if(typeof t!="number")throw"(max) is not a number.";if(typeof r!="number")throw"(value) is not a number.";if(e>t)throw"(min) is greater than (max).";return e<=r&&r<=t}function $(e){if(u(e))return!1;const r=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{3}$/,t=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{6}$/,n=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{8}$/;return r.test(e)||t.test(e)||n.test(e)}function v(e,r,t,n=1){if(!o(0,e,360))throw"(hue) should be a number between 0 and 360";if(!o(0,t,100))throw"(lightness) should be a number between 0 and 100";if(!o(0,r,100))throw"(saturation) should be a number between 0 and 100";if(!o(0,n,1))throw"(alpha) should be a number between 0 and 1";return`hsla(${e}deg ${r}% ${t}% / ${n})`}const x=/^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/,H=/^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;function p(e){return u(e)?!1:x.test(e)}function A(e){return u(e)?!1:H.test(e)}function m(e){if(A(e))return e.slice(5,-1).replace("%","").replace("deg","").replace("/","").replace("  "," ").split(" ").map(r=>parseFloat(r.trim()));if(p(e))return e.slice(4,-1).replace("%","").replace("deg","").replace("/","").split(" ").map(r=>parseFloat(r.trim()));throw"(color) is not of a HSL/HSLA form."}function R(e){if(u(e))return!1;if(p(e)){const[r,t,n]=m(e);return!(360<r||r<0||100<t||t<0||100<n||n<0)}else if(A(e)){const[r,t,n,a]=m(e);return!(360<r||r<0||100<t||t<0||100<n||n<0||a!==void 0&&(1<a||a<0))}return!1}const M=/^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/,G=/^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;function B(e){return u(e)?!1:M.test(e)}function C(e){return u(e)?!1:G.test(e)}function E(e){if(C(e))return e.slice(5,-1).split(",").map(r=>parseFloat(r.trim()));if(B(e))return e.slice(4,-1).split(",").map(r=>parseFloat(r.trim()));throw"(color) is not of a RGB/RGBA form."}function _(e){if(u(e))return!1;if(B(e)){const[r,t,n]=E(e);for(const a of[r,t,n])if(!o(0,a,256))return!1;return!0}else if(C(e)){const[r,t,n,a]=E(e);for(const l of[r,t,n])if(!o(0,l,256))return!1;return!(a!==void 0&&!o(0,a,1))}return!1}const g="hex",c="hsl",h="rgb",w="unknown";function y(e){return $(e)?g:R(e)?c:_(e)?h:w}function q(e,r,t){r/=100,t/=100,e=e%360;const n=(1-Math.abs(2*t-1))*r,a=n*(1-Math.abs(e/60%2-1)),l=t-n/2;let i=0,s=0,F=0;return 0<=e&&e<60?(i=n,s=a,F=0):60<=e&&e<120?(i=a,s=n,F=0):120<=e&&e<180?(i=0,s=n,F=a):180<=e&&e<240?(i=0,s=a,F=n):240<=e&&e<300?(i=a,s=0,F=n):300<=e&&e<360&&(i=n,s=0,F=a),i=Math.round((i+l)*255),s=Math.round((s+l)*255),F=Math.round((F+l)*255),[i,s,F]}function I(e,r,t){e/=255,r/=255,t/=255;const n=Math.min(e,r,t),a=Math.max(e,r,t),l=a-n;let i=0,s=0,F=0;return l==0?i=0:a==e?i=(r-t)/l%6:a==r?i=(t-e)/l+2:i=(e-r)/l+4,i=Math.round(i*60),i<0&&(i+=360),F=(a+n)/2,s=l==0?0:l/(1-Math.abs(2*F-1)),s=+(s*100).toFixed(2),F=+(F*100).toFixed(2),[b(i),b(s),b(F)]}function S(e,r,t,n=1){function a(l){const i=Math.round(l).toString(16);return i.length==1?"0"+i:i}return"#"+a(e)+a(r)+a(t)+a(n*255)}const b=e=>Math.round(e*100)/100;function k(e,r){const t=y(e);if(t===w||![g,c,h].includes(r)||r===t)return e;let[n,a,l,i]=[0,0,0,1];if(t===g){const s=e.substring(1),F=s.length;F===3?(n=parseInt(s[0]+s[0],16),a=parseInt(s[1]+s[1],16),l=parseInt(s[2]+s[2],16)):F>=6&&(n=parseInt(s.substring(0,2),16),a=parseInt(s.substring(2,4),16),l=parseInt(s.substring(4,6),16),F===8&&(i=b(parseInt(s.substring(6),16)/256)))}else if(t===c){const[s,F,d,f]=m(e);f!==void 0&&(i=f),[n,a,l]=q(s,F,d)}else if(t===h){const[s,F,d,f]=E(e);f!==void 0&&(i=f),[n,a,l]=[s,F,d]}if(r===h)return`rgba(${n},${a},${l},${i})`;if(r===c){const[s,F,d]=I(n,a,l);return`hsla(${s}deg ${F}% ${d}% / ${i})`}else if(r===g)return S(n,a,l,i);return e}function L(e){const r=k(e,"hsl");if(y(r)==="unknown")throw"unable to specify (color) type, maybe it is badly formatted ?";return r}function O(e,r,t){const n=L(e);if(!o(0,r,1))throw"(opacity) should be a number between 0 and 1.";const[a,l,i]=m(n);return k(v(a,l,i,r),t??"hex")}const D={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},X=e=>{const r=D[e];return r||D.white};export{O as a,X as c,$ as i};
