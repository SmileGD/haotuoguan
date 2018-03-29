// 解析url路径
// @example ?id=123&a=b
// return Object {id:123,a:b}

export function urlParse(){
	// 获取url地址中？号后边的部分
	let url = window.location.search;
	let obj = {};
	// 制定正则匹配
	let reg = /[?&][^?&]+=[^?&]+/g;

	let arr = url.match(reg);
	// 获取到的是一个数组 eg:['?id=123','&a=b']

	// 如果获取到数组
	if(arr) {
		arr.forEach( (item) => {
			let temArr = item.substring(1).split('=');
			let key = decodeURIComponent(temArr[0]);
			let val = decodeURIComponent(temArr[1]);
			obj[key] = val;
		});
	}

	return obj;

}