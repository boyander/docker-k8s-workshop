FROM python:3.8.0a4-alpine

ADD ./ ./
RUN pip3 install -r requirments.txt

CMD [ "python", "-u", "app.py" ]