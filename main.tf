provide "aws" {}

# Create a VPC
resource "aws_vpc" "my_vpc" {}

# Create a subnet
resource "aws_subnet" "my_subnet" {}

# Create a security group
resource "aws_security_group" "app_sg" {
	vpc_id = aws_vpc.my_vpc.id
		ingress {
		}

	ingress {
	}

	egress {
	}
}

# Create an EC2 Instance
resource {
	ami = ""
		instance_type = ""
		subnet_id = ""
		security_groups = ""

		tags = {
			Name = "MyAppInstance"
		}
}
