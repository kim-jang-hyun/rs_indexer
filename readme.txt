< build & run >

npm install
npm run start:https
npm run build:https
// serve -s build --ssl-cert "certificate.crt" --ssl-key "private.key"

serve -c server.json build --ssl-cert "certificate.crt" --ssl-key "private.key"




< excel 수식 >

여러행 반복 더하기 (3줄씩)
=SUM(INDIRECT("A"&(ROW()*3-2)):INDIRECT("A"&(ROW()*3)))

띄엄띄엄 셀 구하기
=OFFSET($B$4, 0, COLUMN()*2-2)