from flask import Flask, jsonify

app = Flask(__name__)

import pandas as pd

deals = pd.read_csv("deals.csv", index_col = 0)
employees = pd.read_csv("employees.csv", index_col = 0)

merge1 = pd.concat([pd.merge(deals, employees, left_on = ['Bank Employee Contact'], right_on = ['Employee Name'], how = 'inner')])
merge1.drop("Designation", inplace = True, axis = 1)

merge = pd.concat([pd.merge(deals, employees, left_on = ['Bank Employee Contact'], right_on = ['Employee Name'], how = 'inner')])

merge.drop("Designation", inplace = True, axis = 1)

client_name = 'Kara Martinez'

merge = merge[merge['Client (Person)'] != client_name]

preferred_deal_type = 'Public'
merge_after_deal_type_pref = merge[merge["Deal Type"] == preferred_deal_type]
    
preferred_product = 'Schools'
merge_after_product_pref = merge_after_deal_type_pref[merge_after_deal_type_pref["Product"] == preferred_product]

preferred_region = 'Latin America'
merge_after_region_pref = merge_after_product_pref[merge_after_product_pref["Region"] == preferred_region]

merge_after_sort = merge_after_region_pref.sort_values(by = ['Experience (Years)'], ascending = False)

for client in range(len(merge_after_sort.index)):
    if((merge_after_sort['Client Capacity'].iloc[client] != 0)):
        var = merge_after_sort.iloc[[client]]
        #print(var)
        print(var.index)
        print(merge_after_sort.iloc[client].to_dict())
        final_referral=[merge_after_sort.iloc[client].to_dict()]
        Employee_Name = "Employee Name: " + merge_after_sort['Bank Employee Contact'].iloc[client]
        Employee_Company_Department = "Department of the employee: " + merge_after_sort['Company Department'].iloc[client]
        Employee_Client_Capacity = "Client capacity of the employee:  " + str(merge_after_sort['Client Capacity'].iloc[client]) + " clients"
        Employee_Experience_Years = "Employee years of experience:  " + str(merge_after_sort['Experience (Years)'].iloc[client]) + " years"
        Employee_Designation = "Designation of the employee:  " + merge_after_sort['Deal Type'].iloc[client]
      
        Matched_Client_Name = "Matched Client: " + merge_after_sort['Client (Person)'].iloc[client]
        Matched_Client_Industry_Product = "Industry and Product of the matched client:  " + merge_after_sort['Industry'].iloc[client] + ", " + merge_after_sort['Product'].iloc[client]
        Matched_Client_Region_Country = "Region and Country of the matched client:  " + merge_after_sort['Region'].iloc[client] + ", " + merge_after_sort['Country'].iloc[client]
        
        merge_after_sort['Client Capacity'].iloc[client] = merge_after_sort['Client Capacity'].iloc[client] - 1
        break;
        
merge_after_sort['Client Capacity'].iloc[client]

@app.route("/employeereferral")
def members():
    return {"members": [Employee_Name, Employee_Company_Department, Employee_Client_Capacity, Employee_Experience_Years, Employee_Designation, Matched_Client_Name, Matched_Client_Industry_Product, Matched_Client_Region_Country]}
    #return jsonify({'Final_referral': final_referral}), 201
if __name__ == "__main__":
    app.run(debug=True)
