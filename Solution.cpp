
#include<vector>
using namespace std;

class Solution {
public:

    int findJudge(int totalPeople, vector<vector<int>>&trust) {

        size_t size = trust.size();
        vector<int> degreeTrust(totalPeople + 1);
        for (int i = 0; i < size; i++) {
            degreeTrust[trust[i][0]]--;
            degreeTrust[trust[i][1]]++;
        }

        for (int person = 1; person <= totalPeople; person++) {
            if (degreeTrust[person] == totalPeople - 1) {
                return person;
            }
        }
        return -1;
    }
};
