// 瀑布流
export default function waterFall(el,options) {
			let clientWidth = document.documentElement.clientWidth;
			let rem = 20 * (clientWidth / 375);
			let waterfall = el;
			let items = waterfall.children;
			let childWidth = colWidth;
			let column = colNum;
			let space = 0.65;
			let heightArr = [];
			for(let i = 0; i < items.length; i++) {
				// 第一排的盒子 排列
				if(i < column) {
					items[i].style.top = 0;
					items[i].style.left = i * (childWidth + space) + 'rem';
					heightArr[i] = items[i].offsetHeight / rem;
				}else {
					// 找最矮的一列
					let minIndex = 0;
					let minHeight = heightArr[minIndex];
					heightArr.forEach((item, index) => {
						if( minHeight > item) {
							minHeight = item;
							minIndex = index;
						}
					})

					// 设置定位
					items[i].style.top = (minHeight + space) + 'rem';
					items[i].style.left = minIndex * (childWidth + space) + 'rem';

					// 重新记录当前列的高度
					heightArr[minIndex] = minHeight + items[i].offsetHeight / rem + space;
				}
			}

			// 设置大容器的高度 撑开页面
			let maxHeight = heightArr[0];
			heightArr.forEach((item, index) => {
				if( maxHeight < item) {
					maxHeight = item;
				}
			});
			waterfall.style.height = maxHeight + 'rem';
		}
