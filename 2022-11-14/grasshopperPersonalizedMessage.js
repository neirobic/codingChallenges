function greet (name, owner) {
/* (str, str) => str
return 'Hello boss' if name and owner have the same value,
'Hello guest' otherwise.

greet('michael', 'Michael') => 'Hello guest' (??)
greet('Rupreet', 'Abu') => 'Hello guest'
greet('Wenting', 'Wenting') => 'Hello boss'
greet('','') => 'Hello boss' 
*/
  return (name === owner ? 'Hello boss' : 'Hello guest')
  
}