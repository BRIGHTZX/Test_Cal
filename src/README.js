/* Solution
s = รวมตัวเลข
n = รวมตัวเลข
index = รอบต่อไปที่นำไปคิด index จะเกิน
overflow = ผลลัพธ์เกิน

numbers = [1,2,3]
target = 3

// start
findCombine(0, 0, [])
    s findCombine(1, 1, [1])
        s findCombine(2, 3, [1,2]) target (!stop)
        n findCombine(2, 1, [1])
            s findCombine(3, 4, [1,3]) index
            n findCombine(3, 1, [1]) index

    n findCombine(1, 0, []);
        s findCombine(2, 2, [2])
            s  findCombine(3, 5, [2,3]) overflow
            n  findCombine(3, 2, []) index
        n findCombine(2, 0, [])
            s findCombine(3, 3, [3]) target (!stop)
            n findCombine(3, 0, []) index

*/
