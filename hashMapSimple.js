const map = new Map();

map.set('milk', 1);
map.set('cheese', 6);

console.log('milk', map.get('milk'));
map.set('milk', 2);
console.log('milk', map.get('milk'));

console.log('cheese', map.has('cheese'), map.get('cheese'));
map.delete('cheese');
console.log('cheese', map.has('cheese'), map.get('cheese'));