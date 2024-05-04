def func1(s):
    st = []
    for i in range(0,len(s)):
        if s[i] != s[i-1]:
            st.append(s[i]) 
    return "".join(st)
    
def func2(s): 
    result_str = [] 
    for (key,group) in groupby(s): 
        result_str.append(key) 
    return ''.join(result_str)
    
def func3(s):
    return re.sub(r"(.)\1+", r"\1", s)

def func4(s):
    return "".join(unique_justseen(s))

while True:
    string = input()
    print(func1(string))



