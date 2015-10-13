function reverseWordsInString(input) {
	return input.split(' ')
		.map(function(word){
			return word.split('')
				.reverse()
				.join('')
		}).join(' ');
}

console.log(reverseWordsInString('Foo bar baz'));