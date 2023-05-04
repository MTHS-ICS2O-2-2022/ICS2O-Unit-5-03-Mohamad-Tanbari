// Made on May 2023
// Made by: Mohamad
// This program will check your age and tell you which movies you can watch

package main

import (
	"fmt"
)

func main() {
	var age int

	fmt.Println("Enter your age")
	fmt.Scanln(&age)

	switch {
	case age >= 18:
		fmt.Println("You can watch R rated movies")
	case age >= 13:
		fmt.Println("You can watch PG rated movies")
	case age < 13:
		fmt.Println("\nYou can watch G rated movies")
	default:
		fmt.Println("\nInvalid input.")
	}

	// print done on the next line
	fmt.Println("\nDone.")
}
