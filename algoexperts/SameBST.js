function sameBsts(arrayOne, arrayTwo) {
	if(arrayOne.length == 0 && arrayTwo.length == 0) return true;
	if(arrayOne.length !== arrayTwo.length ||arrayOne[0] !== arrayTwo[0]) return false
	
return sameBsts(getLeftSubTree(arrayOne), getLeftSubTree(arrayTwo)) &&
	sameBsts(getRightSubTree(arrayOne), getRightSubTree(arrayTwo))
}

function getLeftSubTree(array){
	const [root, ...subtree] = array;
	return subtree.filter((a) => a < root )
}
function getRightSubTree(array){
	const [root, ...subtree] = array;
	return subtree.filter((a) => a >=root )
}


// find all numbers less than root, they need to be in the same order
// 10 -> 8 -> 5 - > 2
// find all numbers greater than root , they need to be in fhe sams order but we must look at subtrees
// their right and left node lengths need to be the same 
	// for each recursive call 
	
	// the root node for each recrusive call  need to be equal
	
	// return true as base case if we've gone through
	// every single item in arrayone and arraytwo 
	// without encountering a false statement earlier

// Do not edit the line below.
exports.sameBsts = sameBsts;

//true same bst:

//{
 // "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 11],
//  "arrayTwo": [10, 8, 5, 15, 2, 12, 11, 94, 81]
//}

//false not same bst
//{
//  "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
//  "arrayTwo": [11, 8, 5, 15, 2, 12, 94, 81]
//}
