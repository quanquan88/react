
/*
* @Author: quan
* @Date: 2022-07-22 16:48:51
 * @LastEditors: quan
 * @LastEditTime: 2022-07-27 10:23:16
* @Description: file content
*/

import { ArtActionType, ArticleInitType } from "../types";

const initState: ArticleInitType = {
  // 文章加载中的标识
  isLoading: true,
  // 文章详情数据
  info: {},
  comments: {}, // 评论信息
} as ArticleInitType;

export default function reducers(state = initState, action: ArtActionType) {
	if(action.type === 'article/saveArticleDetails') {
		return {
			...state,
			info: action.payload
		}
	}
	if(action.type === 'article/saveComment') {
		return {
			...state,
			comments: action.payload
		}
	}
	if(action.type === 'article/saveMoreComment') {
		return {
			...state,
			comments: {
				...action.payload,
				results: [...state.comments.results, ...action.payload.results]
			}
		}
	}
	if(action.type === 'article/saveNewComment') {
		return {
			...state,
			comments: {
				...state.comments,
				results: [action.payload, ...state.comments.results]
			}
		}
	}
	if(action.type === 'article/updateComment') {
		return {
			...state,
			comments: {
				...state.comments,
				results: state.comments.results.map(item => {
					if(item.com_id === action.payload.com_id) return action.payload;
					return item;
				})
			}
		}
	}
	return state
}