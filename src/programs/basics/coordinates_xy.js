/**
@author ertdfgcvb
@title  Coordinates: x, y
@desc   Use of coord.x and coord.y
[header]
*/

export function main(coord, context, cursor, buffers){
	const char = String.fromCharCode((coord.y + coord.x) % 32 + 60)
	return char
}