The solution involves using optional chaining (?.) or the nullish coalescing operator (??). Optional chaining safely accesses nested properties, returning undefined if any part of the chain is null or undefined. The nullish coalescing operator provides a default value if the expression is null or undefined. 

```javascript
//Example of solution using optional chaining
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'User Name Not Available'}</Text> 
    </View>
  );
};
```

```javascript
//Example of solution using nullish coalescing
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name || 'User Name Not Available'}</Text>  
    </View>
  );
};
```
By using either optional chaining or nullish coalescing, the code gracefully handles cases where `user` is null or undefined, preventing the error.