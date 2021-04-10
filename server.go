package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	http.HandleFunc("/", Handler)
	err := http.ListenAndServe("127.0.0.1:5000", nil)
	if err != nil {
		panic(err.Error())
	}

}

func Handler(w http.ResponseWriter, req *http.Request) {
	header := w.Header()
	header.Add("Access-Control-Allow-Origin", "*")
	header.Add("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS")
	header.Add("Access-Control-Allow-Headers", "Content-Type")
	if req.Method == "POST" {
		data, err := io.ReadAll(req.Body)
		req.Body.Close()
		if err != nil {
			panic(err.Error())
		}
		fmt.Println("POST: ", string(data))
		w.Write([]byte("POST request success!"))
	} else if req.Method == "GET" {
		fmt.Println("GET SUCCSESS!")
		w.Write([]byte("GET request success!"))
	} else if req.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
	} else if req.Method == "PUT" {
		data, err := io.ReadAll(req.Body)
		req.Body.Close()
		if err != nil {
			panic(err.Error())
		}
		fmt.Println("PUT: ", string(data))
		w.Write([]byte("PUT request success!"))
	} else if req.Method == "DELETE" {
		data, err := io.ReadAll(req.Body)
		req.Body.Close()
		if err != nil {
			panic(err.Error())
		}
		fmt.Println("DELETE: ", string(data))
		w.Write([]byte("DELETE request success!"))
	} else {
		w.WriteHeader(405)
	}

}
