export function setLocalStorage(id, data) {
	window.localStorage.setItem(id, JSON.stringify(data))
}
export function getLocalStorage(id) {
	return JSON.parse(window.localStorage.getItem(id))
}
export function removeLocalStorage(idList = []) {
	idList.forEach(id => window.localStorage.removeItem(id))
}
